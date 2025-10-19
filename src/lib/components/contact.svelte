
<script>
  // Reactive variables for form state
import Heading from '$lib/components/heading.svelte';
  let name = '';
  let email = '';
  let inquiryType = 'project'; // Default selection
  let message = '';
  
  // Form status states
  let submitting = false;
  let submitSuccess = false;
  let submitError = null;
  
  // Format the inquiry type to match API expectations
  function formatInquiryType(type) {
    const formats = {
      'project': 'Project Collaboration',
      'job': 'Job Opportunity',
      'partnership': 'Partnership Proposal',
      'other': 'Other Inquiry'
    };
    
    return formats[type] || type;
  }
  
  // Handle form submission
  async function handleSubmit() {
    submitting = true;
    submitSuccess = false;
    submitError = null;
    
    try {
      // Format inquiry type for the API
      const formattedInquiryType = formatInquiryType(inquiryType);
      
      console.log('Sending data:', {
        name,
        email,
        inquiry: formattedInquiryType,
        message
      });
      
      const response = await fetch('https://uthmangobackend.leapcell.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          inquiry: formattedInquiryType,
          message
        })
      });
      
      const data = await response.json();
      console.log('Response data:', data);
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit the form');
      }
      
      submitSuccess = true;
      
      // Reset form
      name = '';
      email = '';
      inquiryType = 'project';
      message = '';
      
    } catch (error) {
      console.error('Error submitting form:', error);
      submitError = 'There was an error sending your message. Please try again later.';
    } finally {
      submitting = false;
    }
  }
</script>
<section id="contact" class="relative py-20 overflow-hidden">
  <!-- Clean background -->
  <div class="absolute inset-0 bg-gradient-to-b from-sec to-sec/95"></div>

  <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Section Header -->
    <div class="text-center mb-16" data-aos="fade-up">
      <Heading 
        badge="Let's Connect"
        heading="Get In Touch" 
        subtext="Ready to bring your vision to life? I'm available for new projects and collaborations. Let's discuss how we can create something exceptional together." 
      />
    </div>

    <div class="grid lg:grid-cols-2 gap-16 items-start">

      <!-- Contact Info -->
      <div class="space-y-8" data-aos="fade-right" data-aos-delay="200">

        <!-- Main contact card -->
        <div class="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-acc/20 shadow-xl hover:shadow-2xl hover:border-acc/40 transition-all duration-500">
          <h3 class="text-xl font-ice font-bold text-acc mb-6">Let's Connect</h3>

          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="bg-acc/10 p-3 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-acc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4 class="font-bold font-ice text-text">Email</h4>
                <p class="text-text/70 mt-1 font-mono break-all">uoladele99@gmail.com</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="bg-acc/10 p-3 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-acc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 class="font-bold font-ice text-text">Location</h4>
                <p class="text-text/70 mt-1 font-mono">Lagos State, Nigeria</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="bg-acc/10 p-3 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-acc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h4 class="font-bold font-ice text-text">Response Time</h4>
                <p class="text-text/70 mt-1 font-mono">Usually within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Availability Status -->
        <div class="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-acc/20 hover:border-acc/40 transition-all duration-300">
          <div class="flex items-center space-x-3">
            <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span class="font-ice font-bold text-text">Available for Projects</span>
          </div>
          <p class="text-text/70 mt-2 text-sm">
            Currently accepting new backend development and API design projects.
          </p>
        </div>
      </div>

      <!-- Contact Form -->
      <div data-aos="fade-left" data-aos-delay="300">
        <div class="bg-card/60 backdrop-blur-sm rounded-2xl border border-acc/20 shadow-xl hover:shadow-2xl hover:border-acc/40 transition-all duration-500 overflow-hidden">

          <!-- Terminal header -->
          <div class="flex items-center space-x-2 p-4 bg-card/80 border-b border-acc/20">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-acc"></div>
            <div class="ml-3 text-sm font-mono text-text/70">contact-form</div>
          </div>

          <div class="p-8">

            {#if submitSuccess}
              <div class="bg-acc/10 border border-acc/30 text-text p-4 rounded-lg mb-6">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-acc mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span class="font-bold font-ice">Message Sent!</span>
                </div>
                <p class="mt-2 text-text/80 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            {/if}

            {#if submitError}
              <div class="bg-red-500/10 border border-red-500/30 text-text p-4 rounded-lg mb-6">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span class="font-bold font-ice">Error</span>
                </div>
                <p class="mt-2 text-sm">{submitError}</p>
              </div>
            {/if}

            <form class="space-y-6" on:submit|preventDefault={handleSubmit}>

              <!-- Name and Email Row -->
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block font-mono text-text mb-2 text-sm">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    bind:value={name}
                    required
                    class="w-full bg-sec/80 border border-acc/20 rounded-lg px-4 py-3 font-mono text-text placeholder-text/50 focus:border-acc focus:outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label for="email" class="block font-mono text-text mb-2 text-sm">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    bind:value={email}
                    required
                    class="w-full bg-sec/80 border border-acc/20 rounded-lg px-4 py-3 font-mono text-text placeholder-text/50 focus:border-acc focus:outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <!-- Inquiry Type -->
              <div>
                <label class="block font-mono text-text mb-3 text-sm">What's this about? *</label>
                <div class="grid grid-cols-2 gap-3">
                  <div class="relative">
                    <input 
                      type="radio" 
                      id="project" 
                      bind:group={inquiryType} 
                      value="project" 
                      class="peer hidden" 
                    />
                    <label for="project" class="block w-full text-center bg-sec/80 border border-acc/20 rounded-lg px-3 py-2.5 font-mono text-text cursor-pointer peer-checked:bg-acc/10 peer-checked:border-acc peer-checked:text-acc transition-all duration-200 text-sm">
                      Project
                    </label>
                  </div>
                  <div class="relative">
                    <input 
                      type="radio" 
                      id="job" 
                      bind:group={inquiryType} 
                      value="job" 
                      class="peer hidden" 
                    />
                    <label for="job" class="block w-full text-center bg-sec/80 border border-acc/20 rounded-lg px-3 py-2.5 font-mono text-text cursor-pointer peer-checked:bg-acc/10 peer-checked:border-acc peer-checked:text-acc transition-all duration-200 text-sm">
                      Job Offer
                    </label>
                  </div>
                  <div class="relative">
                    <input 
                      type="radio" 
                      id="partnership" 
                      bind:group={inquiryType} 
                      value="partnership" 
                      class="peer hidden" 
                    />
                    <label for="partnership" class="block w-full text-center bg-sec/80 border border-acc/20 rounded-lg px-3 py-2.5 font-mono text-text cursor-pointer peer-checked:bg-acc/10 peer-checked:border-acc peer-checked:text-acc transition-all duration-200 text-sm">
                      Partnership
                    </label>
                  </div>
                  <div class="relative">
                    <input 
                      type="radio" 
                      id="other" 
                      bind:group={inquiryType} 
                      value="other" 
                      class="peer hidden" 
                    />
                    <label for="other" class="block w-full text-center bg-sec/80 border border-acc/20 rounded-lg px-3 py-2.5 font-mono text-text cursor-pointer peer-checked:bg-acc/10 peer-checked:border-acc peer-checked:text-acc transition-all duration-200 text-sm">
                      Other
                    </label>
                  </div>
                </div>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block font-mono text-text mb-2 text-sm">Message *</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  bind:value={message}
                  required
                  class="w-full bg-sec/80 border border-acc/20 rounded-lg px-4 py-3 font-mono text-text placeholder-text/50 focus:border-acc focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <div class="flex justify-end pt-2">
                <button 
                  type="submit"
                  disabled={submitting}
                  class="inline-flex items-center px-8 py-3 bg-acc hover:bg-acc/90 text-sec font-bold rounded-lg transition-all duration-300 font-ice transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {#if submitting}
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-sec" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    Send Message
                  {/if}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>