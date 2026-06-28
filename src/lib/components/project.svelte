<script>
  import ProjectCard from '$lib/components/projectCard.svelte';

  const projects = [
    {
      name: 'Kyu',
      description: 'Distributed job queue for Go backed by PostgreSQL and Redis with retries, scheduling, and Prometheus metrics. Sub-microsecond dispatch path.',
      tech_stack: ['Go', 'PostgreSQL', 'Redis'],
      github_url: 'https://github.com/codetesla51/kyu',
      doc_url: 'https://kyu-job-queue.vercel.app/'
    },
    {
      name: 'Raw-HTTP',
      description: 'HTTP/1.1 server built from TCP sockets. Keep-alive, TLS, static files, graceful shutdown. Buffer pooling pushed throughput from 5,000 to 11,000 RPS.',
      tech_stack: ['Go', 'TCP/IP', 'TLS'],
      github_url: 'https://github.com/codetesla51/raw-http'
    },
    {
      name: 'Limitz',
      description: 'Rate limiting library for Go with five algorithms and pluggable storage backends. Sub-millisecond performance, used in production.',
      tech_stack: ['Go', 'Redis', 'PostgreSQL'],
      github_url: 'https://github.com/codetesla51/limitz'
    },
    {
      name: 'Ledger System',
      description: 'Family savings management system with dual-pool accounting, care fund requests, and automatic overdue tracking. Go/PostgreSQL backend with Redis-backed notifications and JWT authentication.',
      tech_stack: ['Go', 'PostgreSQL', 'Redis', 'Supabase', 'Kyu'],
    }

  ];
</script>

<section id="projects" class="py-20 md:py-28">
  <div class="section-container">

    <div class="flex items-center gap-3 mb-16">
      <span class="h-px w-7" style="background-color: var(--border-strong);"></span>
      <span class="font-mono text-xs tracking-[0.22em] uppercase" style="color: var(--text-muted);">Projects</span>
    </div>

    <div>
      {#each projects as project, i}
        <ProjectCard {project} index={i} />
      {/each}
    </div>

    <div class="mt-12 pt-8" style="border-top: 1px solid var(--border);">
      <a
        href="https://github.com/codetesla51?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        class="font-mono text-xs tracking-[0.12em] link-fade"
        style="color: var(--text-muted);"
      >
        More on GitHub →
      </a>
    </div>

  </div>
</section>

<style>
  .link-fade {
    opacity: 0.6;
    transition: opacity 0.18s ease;
    text-decoration: none;
  }
  .link-fade:hover { opacity: 1; }
</style>