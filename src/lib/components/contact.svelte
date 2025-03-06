<script>
  import { onMount } from 'svelte';

  const socialLinks = [
    { 
      name: "GitHub", 
      url: "https://github.com/codetesla51",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/uthman-dev/",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
    },
    { 
      name: "X", 
      url: "https://twitter.com/uthmandev",
      icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>`
    }
  ];

  // Email Popup State
  let showEmailPopup = false;
  let email = '';
  let selectedInquiry = '';
  let additionalDetails = '';
  let isSubmitting = false;
  let submitSuccess = false;
  let submitError = false;

const inquiryOptions = [
    { 
      title: 'Project Inquiry', 
      description: 'Discuss a potential project or collaboration',
      icon: { 
        viewBox: "0 0 24 24", 
        path: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      }
    },
    { 
      title: 'Job Offer', 
      description: 'Explore career opportunities',
      icon: { 
        viewBox: "0 0 24 24", 
        path: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
      }
    },
    { 
      title: 'Freelance Work', 
      description: 'Contract-based or short-term projects',
      icon: { 
        viewBox: "0 0 24 24", 
        path: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      }
    },
    { 
      title: 'Consultation', 
      description: 'Technical advice or strategy session',
      icon: { 
        viewBox: "0 0 24 24", 
        path: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.782 2.782L8.5 8.5M7 14l-1.5 1.5M3 3l3 3m0 0l3 3m-3-3h6m0 8h2a2 2 0 002-2V7a2 2 0 00-2-2h-2"
      }
    },
    { 
      title: 'Speaking/Workshop', 
      description: 'Invite for events or training',
      icon: { 
        viewBox: "0 0 24 24", 
        path: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      }
    },
    { 
      title: 'Other', 
      description: 'Something not listed here',
      icon: { 
        viewBox: "0 0 24 24", 
        path: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      }
    }
  ];
  async function handleEmailSubmit(e) {
    e.preventDefault();
    isSubmitting = true;
    submitSuccess = false;
    submitError = false;

    try {
      // Simulated form submission - replace with actual backend logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      email = '';
      selectedInquiry = '';
      additionalDetails = '';
      submitSuccess = true;
      
      // Optional: Close popup after success
      setTimeout(() => {
        showEmailPopup = false;
      }, 2000);
    } catch (error) {
      submitError = true;
    } finally {
      isSubmitting = false;
    }
  }
</script>

<section id="contact" class="bg-sec py-16 px-4 md:px-8 lg:px-16">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-acc font-ice mb-8 text-center">Let's Connect</h2>
    
    <div class="space-y-6">
      <div class="text-center max-w-xl mx-auto mb-8">
        <p class="text-text/80 leading-relaxed">
          I'm always open to exciting opportunities, collaborations, and interesting conversations. 
          Whether you're looking to discuss a project, explore potential partnerships, 
          or just want to say hello, feel free to reach out.
        </p>
      </div>

      <div class="flex flex-col items-center space-y-6">
        <div class="text-center">
          <h3 class="text-xl font-semibold text-acc mb-4">Connect on Social Media</h3>
          <div class="flex space-x-4 justify-center">
            {#each socialLinks as social}
              <a 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-text/70 hover:text-acc transition-colors duration-300"
                aria-label={`${social.name} Profile`}
              >
                {@html social.icon}
              </a>
            {/each}
          </div>
        </div>

        <!-- OR Divider -->
        <div class="flex items-center justify-center space-x-4 w-full max-w-md">
          <div class="flex-grow border-t border-text/20"></div>
          <span class="text-text/70 px-4">OR</span>
          <div class="flex-grow border-t border-text/20"></div>
        </div>

        <!-- Send Email Button -->
        <button 
          on:click={() => showEmailPopup = true}
          class="bg-acc text-sec px-6 py-3 rounded-md hover:bg-acc/90 transition-colors duration-300 font-mono"
        >
          Send an Email
        </button>
      </div>
    </div>
  </div>

  <!-- Email Popup -->
  {#if showEmailPopup}
    <div 
      class="fixed inset-0 bg-black/100 z-50 flex items-center justify-center p-4"
      on:click|self={() => showEmailPopup = false}
    >
      
      <div 
        class="bg-card p-8 rounded-lg shadow-lg w-full max-w-4xl"
        on:click|stopPropagation
      >
        <h3 class="text-2xl font-bold text-acc mb-6 text-center">What can I help you with?</h3>
        
        <form on:submit={handleEmailSubmit} class="space-y-6">
          <div class="mb-6">
            <label for="email" class="block text-text/80 mb-2 font-mono">Your Email</label>
            <input 
              type="email" 
              id="email"
              bind:value={email}
              required
              class="w-full bg-sec/50 text-text border border-text/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-acc/50 transition-all duration-300"
              placeholder="you@example.com"
            />
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            {#each inquiryOptions as option}
              <div 
                class="border border-text/20 rounded-lg p-4 cursor-pointer transition-all duration-300 
                       hover:border-acc hover:bg-sec/30 
                       {selectedInquiry === option.title ? 'border-acc bg-sec/30' : ''}"
                on:click={() => selectedInquiry = option.title}
                on:keydown={(e) => e.key === 'Enter' && (selectedInquiry = option.title)}
                tabindex="0"
                role="button"
                aria-pressed={selectedInquiry === option.title}
              >
                <div class="flex items-center space-x-4">
                  <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-8 w-8" 
            fill="none" 
            viewBox="{option.icon.viewBox}" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="{option.icon.path}"
            />
          </svg>
                  <div>
                    <h4 class="font-semibold text-text">{option.title}</h4>
                    <p class="text-text/70 text-sm">{option.description}</p>
                  </div>
                </div>
              </div>
            {/each}
          </div>

          <div class="mt-6">
            <label for="details" class="block text-text/80 mb-2 font-mono">Additional Details</label>
            <textarea 
              id="details"
              bind:value={additionalDetails}
              rows="4"
              class="w-full bg-sec/50 text-text border border-text/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-acc/50 transition-all duration-300"
              placeholder="Provide more context about your inquiry..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting || !selectedInquiry}
            class="w-full bg-acc text-sec py-3 rounded-md hover:bg-acc/90 transition-colors duration-300 font-mono flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {#if isSubmitting}
              <svg class="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            {/if}
            Send Email
          </button>

          {#if submitSuccess}
            <p class="text-green-500 text-center mt-4">Email sent successfully!</p>
          {/if}

          {#if submitError}
            <p class="text-red-500 text-center mt-4">Failed to send email. Please try again.</p>
          {/if}
        </form>

        <!-- Close Button -->
        <button 
          on:click={() => showEmailPopup = false}
          class="absolute top-4 right-4 text-text/50 hover:text-acc transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  {/if}
</section>