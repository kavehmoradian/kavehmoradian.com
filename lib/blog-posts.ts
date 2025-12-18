export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
  views: string
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "python-docker-health-monitoring",
    title: "Python Code for Docker Health Monitoring",
    excerpt:
      "Learn how to implement robust Docker container health checks using Python. This guide covers monitoring container status, handling failures, and automating recovery processes.",
    content: `
# Python Code for Docker Health Monitoring

Docker health checks are crucial for maintaining reliable containerized applications. In this post, we'll explore how to implement comprehensive health monitoring using Python.

## Why Docker Health Monitoring Matters

Container health monitoring helps you:
- Detect failing containers early
- Automate recovery processes
- Maintain service availability
- Monitor resource usage

## Basic Health Check Implementation

Let's start with a simple health check script:

\`\`\`python
import docker
import time
import logging
from typing import List, Dict, Any

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class DockerHealthMonitor:
    def __init__(self):
        self.client = docker.from_env()
    
    def check_container_health(self, container_name: str) -> Dict[str, Any]:
        """Check the health status of a specific container."""
        try:
            container = self.client.containers.get(container_name)
            
            health_status = {
                'name': container.name,
                'status': container.status,
                'health': container.attrs.get('State', {}).get('Health', {}),
                'created': container.attrs['Created'],
                'image': container.image.tags[0] if container.image.tags else 'unknown'
            }
            
            return health_status
            
        except docker.errors.NotFound:
            logger.error(f"Container {container_name} not found")
            return {'error': f"Container {container_name} not found"}
        except Exception as e:
            logger.error(f"Error checking container {container_name}: {str(e)}")
            return {'error': str(e)}
\`\`\`

## Advanced Health Monitoring

For production environments, you'll need more sophisticated monitoring:

\`\`\`python
import psutil
import requests
from datetime import datetime, timedelta

class AdvancedDockerMonitor(DockerHealthMonitor):
    def __init__(self, alert_threshold: int = 80):
        super().__init__()
        self.alert_threshold = alert_threshold
        self.unhealthy_containers = {}
    
    def monitor_all_containers(self) -> List[Dict[str, Any]]:
        """Monitor all running containers."""
        containers_status = []
        
        for container in self.client.containers.list():
            status = self.get_detailed_status(container)
            containers_status.append(status)
            
            # Check if container needs attention
            if self.needs_attention(status):
                self.handle_unhealthy_container(container)
        
        return containers_status
    
    def get_detailed_status(self, container) -> Dict[str, Any]:
        """Get detailed container status including resource usage."""
        try:
            stats = container.stats(stream=False)
            
            # Calculate CPU usage
            cpu_usage = self.calculate_cpu_usage(stats)
            
            # Calculate memory usage
            memory_usage = self.calculate_memory_usage(stats)
            
            return {
                'name': container.name,
                'id': container.short_id,
                'status': container.status,
                'cpu_usage': cpu_usage,
                'memory_usage': memory_usage,
                'network_io': stats.get('networks', {}),
                'block_io': stats.get('blkio_stats', {}),
                'health_check': self.get_health_check_status(container)
            }
            
        except Exception as e:
            logger.error(f"Error getting stats for {container.name}: {str(e)}")
            return {'name': container.name, 'error': str(e)}
    
    def calculate_cpu_usage(self, stats: Dict) -> float:
        """Calculate CPU usage percentage."""
        try:
            cpu_stats = stats['cpu_stats']
            precpu_stats = stats['precpu_stats']
            
            cpu_delta = cpu_stats['cpu_usage']['total_usage'] - precpu_stats['cpu_usage']['total_usage']
            system_delta = cpu_stats['system_cpu_usage'] - precpu_stats['system_cpu_usage']
            
            if system_delta > 0:
                cpu_usage = (cpu_delta / system_delta) * len(cpu_stats['cpu_usage']['percpu_usage']) * 100
                return round(cpu_usage, 2)
            
        except (KeyError, ZeroDivisionError):
            pass
        
        return 0.0
    
    def calculate_memory_usage(self, stats: Dict) -> Dict[str, Any]:
        """Calculate memory usage statistics."""
        try:
            memory_stats = stats['memory_stats']
            usage = memory_stats['usage']
            limit = memory_stats['limit']
            
            usage_percent = (usage / limit) * 100
            
            return {
                'usage_bytes': usage,
                'limit_bytes': limit,
                'usage_percent': round(usage_percent, 2),
                'usage_mb': round(usage / (1024 * 1024), 2),
                'limit_mb': round(limit / (1024 * 1024), 2)
            }
            
        except KeyError:
            return {'error': 'Memory stats not available'}
\`\`\`

## Automated Recovery and Alerts

Implement automated recovery mechanisms:

\`\`\`python
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

class DockerRecoveryManager(AdvancedDockerMonitor):
    def __init__(self, smtp_config: Dict[str, str] = None):
        super().__init__()
        self.smtp_config = smtp_config or {}
        self.recovery_attempts = {}
        self.max_recovery_attempts = 3
    
    def handle_unhealthy_container(self, container):
        """Handle unhealthy container with recovery attempts."""
        container_name = container.name
        
        if container_name not in self.recovery_attempts:
            self.recovery_attempts[container_name] = 0
        
        if self.recovery_attempts[container_name] < self.max_recovery_attempts:
            logger.info(f"Attempting to recover container: {container_name}")
            
            if self.attempt_recovery(container):
                logger.info(f"Successfully recovered container: {container_name}")
                self.recovery_attempts[container_name] = 0
            else:
                self.recovery_attempts[container_name] += 1
                logger.warning(f"Recovery attempt {self.recovery_attempts[container_name]} failed for {container_name}")
        else:
            logger.error(f"Max recovery attempts reached for {container_name}")
            self.send_alert(container_name, "Max recovery attempts reached")
    
    def attempt_recovery(self, container) -> bool:
        """Attempt to recover a failed container."""
        try:
            if container.status == 'exited':
                container.restart()
                time.sleep(10)  # Wait for container to start
                
                # Verify recovery
                container.reload()
                return container.status == 'running'
            
            elif container.status == 'running':
                # Check if container is responsive
                if not self.is_container_responsive(container):
                    container.restart()
                    time.sleep(10)
                    container.reload()
                    return self.is_container_responsive(container)
            
        except Exception as e:
            logger.error(f"Recovery failed for {container.name}: {str(e)}")
            return False
        
        return True
    
    def is_container_responsive(self, container) -> bool:
        """Check if container is responsive to health checks."""
        try:
            # Get container's exposed ports
            ports = container.attrs['NetworkSettings']['Ports']
            
            for port_info in ports.values():
                if port_info:
                    host_port = port_info[0]['HostPort']
                    response = requests.get(f"http://localhost:{host_port}/health", timeout=5)
                    return response.status_code == 200
                    
        except Exception:
            pass
        
        return False
    
    def send_alert(self, container_name: str, message: str):
        """Send email alert for critical issues."""
        if not self.smtp_config:
            logger.warning("SMTP not configured, skipping email alert")
            return
        
        try:
            msg = MIMEMultipart()
            msg['From'] = self.smtp_config['from_email']
            msg['To'] = self.smtp_config['to_email']
            msg['Subject'] = f"Docker Alert: {container_name}"
            
            body = f"""
            Docker Health Monitor Alert
            
            Container: {container_name}
            Issue: {message}
            Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
            
            Please check the container status immediately.
            """
            
            msg.attach(MIMEText(body, 'plain'))
            
            server = smtplib.SMTP(self.smtp_config['smtp_server'], self.smtp_config['smtp_port'])
            server.starttls()
            server.login(self.smtp_config['username'], self.smtp_config['password'])
            server.send_message(msg)
            server.quit()
            
            logger.info(f"Alert sent for container: {container_name}")
            
        except Exception as e:
            logger.error(f"Failed to send alert: {str(e)}")
\`\`\`

## Usage Example

Here's how to use the Docker health monitoring system:

\`\`\`python
def main():
    # SMTP configuration for alerts
    smtp_config = {
        'smtp_server': 'smtp.gmail.com',
        'smtp_port': 587,
        'username': 'your-email@gmail.com',
        'password': 'your-app-password',
        'from_email': 'your-email@gmail.com',
        'to_email': 'admin@yourcompany.com'
    }
    
    # Initialize the recovery manager
    monitor = DockerRecoveryManager(smtp_config)
    
    # Monitor containers continuously
    while True:
        try:
            logger.info("Starting container health check...")
            containers_status = monitor.monitor_all_containers()
            
            # Log summary
            healthy_count = sum(1 for c in containers_status if c.get('status') == 'running')
            total_count = len(containers_status)
            
            logger.info(f"Health check complete: {healthy_count}/{total_count} containers healthy")
            
            # Wait before next check
            time.sleep(60)  # Check every minute
            
        except KeyboardInterrupt:
            logger.info("Monitoring stopped by user")
            break
        except Exception as e:
            logger.error(f"Monitoring error: {str(e)}")
            time.sleep(30)  # Wait before retrying

if __name__ == "__main__":
    main()
\`\`\`

## Best Practices

1. **Set appropriate timeouts** for health checks
2. **Implement exponential backoff** for recovery attempts
3. **Monitor resource usage** to prevent system overload
4. **Use structured logging** for better debugging
5. **Test your recovery procedures** regularly

## Conclusion

Implementing robust Docker health monitoring with Python helps ensure your containerized applications remain reliable and available. The code examples provided offer a solid foundation that you can extend based on your specific requirements.

Remember to test your monitoring and recovery procedures in a staging environment before deploying to production.
    `,
    category: "DevOps",
    date: "Dec 20, 2024",
    readTime: "12 min read",
    views: "45 views",
    author: "DevOps Engineer",
  },
  {
    slug: "terraform-aws-infrastructure",
    title: "Building Resilient Infrastructure with Terraform and AWS",
    excerpt:
      "Learn how to create scalable and maintainable infrastructure using Infrastructure as Code principles. This comprehensive guide covers best practices for Terraform modules, state management, and AWS resource organization.",
    content: "# Building Resilient Infrastructure with Terraform and AWS\n\nContent coming soon...",
    category: "DevOps",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    views: "142 views",
    author: "Cloud Architect",
  },
  {
    slug: "kubernetes-monitoring-prometheus",
    title: "Monitoring Kubernetes Clusters with Prometheus and Grafana",
    excerpt: "A step-by-step guide to setting up comprehensive monitoring for your Kubernetes infrastructure...",
    content: "# Monitoring Kubernetes Clusters with Prometheus and Grafana\n\nContent coming soon...",
    category: "SRE",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    views: "89 views",
    author: "SRE Specialist",
  },
  {
    slug: "gitops-argocd-helm",
    title: "GitOps Workflows with ArgoCD and Helm",
    excerpt: "Implementing continuous deployment using GitOps principles for better reliability and traceability...",
    content: "# GitOps Workflows with ArgoCD and Helm\n\nContent coming soon...",
    category: "DevOps",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    views: "156 views",
    author: "DevOps Engineer",
  },
  {
    slug: "aws-cost-optimization",
    title: "AWS Cost Optimization Strategies for Startups",
    excerpt: "Practical tips to reduce your AWS bill without compromising on performance and reliability...",
    content: "# AWS Cost Optimization Strategies for Startups\n\nContent coming soon...",
    category: "Cloud",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    views: "203 views",
    author: "Cloud Engineer",
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}
