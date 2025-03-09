<script>
  // Reactive variables for form state
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
      
      const response = await fetch('http://127.0.0.1:8000/contacts', {
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

<section id="contact" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <h2 
    class="text-3xl font-bold text-acc mb-4 font-ice"
    data-aos="fade-right"
    data-aos-delay="100"
  >
    Get In Touch
  </h2>
  
  <p 
    class="text-text/80 max-w-2xl mb-8"
    data-aos="fade-right"
    data-aos-delay="150"
  >
    Have a project in mind or want to collaborate? I'm always open to new opportunities and challenges. Let's create something amazing together!
  </p>
  
  <div class="grid md:grid-cols-5 gap-8">
    <div 
      class="md:col-span-2"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div class="space-y-6">
        <div class="flex items-start space-x-4">
          <div class="bg-acc/10 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-acc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div>
            <h3 class="font-bold font-ice text-text">Email Me</h3>
            <p class="text-text/70 mt-1 font-mono">contact@uthman.dev</p>
          </div>
        </div>
        
        <div class="flex items-start space-x-4">
          <div class="bg-acc/10 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-acc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div>
            <h3 class="font-bold font-ice text-text">Location</h3>
            <p class="text-text/70 mt-1 font-mono">Lagos, Nigeria</p>
          </div>
        </div>
        
        <div class="flex items-start space-x-4">
          <div class="bg-acc/10 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-acc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div>
            <h3 class="font-bold font-ice text-text">Response Time</h3>
            <p class="text-text/70 mt-1 font-mono">Usually within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
    
    <div 
      class="md:col-span-3 bg-card rounded-xl border border-acc/30 p-6 md:p-8"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      <div class="flex items-center space-x-2 mb-6">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-acc"></div>
        <div class="ml-2 text-xs font-mono opacity-70">~/contact-form.sh</div>
      </div>
      
      {#if submitSuccess}
        <div class="bg-acc/20 border border-acc/50 text-text p-4 rounded-lg mb-6">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-acc mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span class="font-bold font-ice">Message Sent Successfully!</span>
          </div>
          <p class="mt-2 text-text/80">Thank you for reaching out. I'll get back to you as soon as possible.</p>
        </div>
      {/if}
      
      {#if submitError}
        <div class="bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg mb-6">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span class="font-bold font-ice">Error!</span>
          </div>
          <p class="mt-2">{submitError}</p>
        </div>
      {/if}
      
      <form class="space-y-6" on:submit|preventDefault={handleSubmit}>
        <div class="grid md:grid-cols-2 gap-6">
          <div data-aos="fade-up" data-aos-delay="350">
            <label for="name" class="block font-mono text-text mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              bind:value={name}
              required
              class="w-full bg-sec border border-acc/30 rounded-lg px-4 py-3 font-mono text-text focus:border-acc focus:outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <label for="email" class="block font-mono text-text mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              bind:value={email}
              required
              class="w-full bg-sec border border-acc/30 rounded-lg px-4 py-3 font-mono text-text focus:border-acc focus:outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="450">
          <label class="block font-mono text-text mb-2">Inquiry Type</label>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="relative">
              <input 
                type="radio" 
                id="project" 
                bind:group={inquiryType} 
                value="project" 
                class="peer hidden" 
                checked 
              />
              <label for="project" class="block w-full text-center bg-sec border border-acc/30 rounded-lg px-3 py-2 font-mono text-text cursor-pointer peer-checked:bg-acc/10 peer-checked:border-acc transition-colors">Project</label>
            </div>
            <div class="relative">
              <input 
                type="radio" 
                id="job" 
                bind:group={inquiryType} 
                value="job" 
                class="peer hidden" 
              />
              <label for="job" class="block w-full text-center bg-sec border border-acc/30 rounded-lg px-3 py-2 font-mono text-text cursor-pointer peer-checked:bg-acc/10 peer-checked:border-acc transition-colors">Job Offer</label>
            </div>
            <div class="relative">
              <input 
                type="radio" 
                id="partnership" 
                bind:group={inquiryType} 
                value="partnership" 
                class="peer hidden" 
              />
              <label for="partnership" class="block w-full text-center bg-sec border border-acc/30 rounded-lg px-3 py-2 font-mono text-text cursor-pointer peer-checked:bg-acc/10 peer-checked:border-acc transition-colors">Partnership</label>
            </div>
            <div class="relative">
              <input 
                type="radio" 
                id="other" 
                bind:group={inquiryType} 
                value="other" 
                class="peer hidden" 
              />
              <label for="other" class="block w-full text-center bg-sec border border-acc/30 rounded-lg px-3 py-2 font-mono text-text cursor-pointer peer-checked:bg-acc/10 peer-checked:border-acc transition-colors">Other</label>
            </div>
          </div>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="500">
          <label for="message" class="block font-mono text-text mb-2">Message</label>
          <textarea 
            id="message" 
            rows="5" 
            bind:value={message}
            required
            class="w-full bg-sec border border-acc/30 rounded-lg px-4 py-3 font-mono text-text focus:border-acc focus:outline-none transition-colors resize-none"
            placeholder="Hello Uthman, I'd like to discuss a project idea..."
          ></textarea>
        </div>
        
        <div class="flex justify-end" data-aos="fade-up" data-aos-delay="550">
          <button 
            type="submit"
            disabled={submitting}
            class="inline-flex items-center px-6 py-3 bg-acc text-sec font-semibold rounded-lg hover:bg-acc/90 transition-colors font-ice"
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
</section>