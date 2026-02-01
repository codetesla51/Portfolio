<script>
  let name = '';
  let email = '';
  let inquiryType = 'project';
  let message = '';
  
  let submitting = false;
  let submitStatus = null; // 'success' | 'error' | null
  let submitMessage = '';
  
  // Validation state
  let errors = {
    name: '',
    email: '',
    message: ''
  };
  let touched = {
    name: false,
    email: false,
    message: false
  };

  // Validation functions
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validateField(field) {
    touched[field] = true;
    
    switch(field) {
      case 'name':
        errors.name = name.trim().length < 2 ? 'Name must be at least 2 characters' : '';
        break;
      case 'email':
        if (!email.trim()) {
          errors.email = 'Email is required';
        } else if (!validateEmail(email)) {
          errors.email = 'Please enter a valid email';
        } else {
          errors.email = '';
        }
        break;
      case 'message':
        errors.message = message.trim().length < 10 ? 'Message must be at least 10 characters' : '';
        break;
    }
  }

  function validateAll() {
    validateField('name');
    validateField('email');
    validateField('message');
    return !errors.name && !errors.email && !errors.message;
  }

  function formatInquiryType(type) {
    const formats = {
      'project': 'Project Collaboration',
      'job': 'Job Opportunity',
      'other': 'General Inquiry'
    };
    return formats[type] || type;
  }
  
  async function handleSubmit() {
    if (!validateAll()) return;
    
    submitting = true;
    submitStatus = null;
    
    try {
      const formattedInquiryType = formatInquiryType(inquiryType);
      
      // Send to LeapCell backend
      const response = await fetch('https://uthmangobackend.leapcell.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          inquiry: formattedInquiryType,
          message: message.trim()
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      submitStatus = 'success';
      submitMessage = "Thanks for reaching out! I'll get back to you within 24 hours.";
      
      // Reset form
      name = '';
      email = '';
      inquiryType = 'project';
      message = '';
      touched = { name: false, email: false, message: false };
      errors = { name: '', email: '', message: '' };
      
    } catch (error) {
      console.error('Error submitting form:', error);
      submitStatus = 'error';
      submitMessage = 'Something went wrong. Please try again or email me directly.';
    } finally {
      submitting = false;
    }
  }
</script>

<section id="contact" class="py-16 sm:py-24 md:py-32 border-t border-neutral-900">
  <div class="section-container">
    <div class="max-w-2xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-8 sm:mb-12">
        <span class="text-neutral-500 text-sm font-mono tracking-wider uppercase mb-4 block">Contact</span>
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Get in Touch
        </h2>
        <p class="text-neutral-500 text-base sm:text-lg">
          Have a project in mind or just want to chat? Send me a message.
        </p>
      </div>

      <!-- Status Messages -->
      {#if submitStatus === 'success'}
        <div class="mb-8 p-4 rounded-lg border border-green-500/30 bg-green-500/10 flex items-start gap-3">
          <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <div>
            <p class="font-medium text-green-400">Message Sent!</p>
            <p class="text-sm text-neutral-400 mt-1">{submitMessage}</p>
          </div>
        </div>
      {/if}

      {#if submitStatus === 'error'}
        <div class="mb-8 p-4 rounded-lg border border-red-500/30 bg-red-500/10 flex items-start gap-3">
          <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <div>
            <p class="font-medium text-red-400">Failed to Send</p>
            <p class="text-sm text-neutral-400 mt-1">{submitMessage}</p>
          </div>
        </div>
      {/if}

      <!-- Contact Form -->
      <form class="space-y-6" on:submit|preventDefault={handleSubmit}>
        <!-- Name & Email Row -->
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-sm font-medium text-neutral-400 mb-2">
              Name
            </label>
            <input 
              type="text" 
              id="name" 
              bind:value={name}
              on:blur={() => validateField('name')}
              class="input-minimal {touched.name && errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}"
              placeholder="Your name"
            />
            {#if touched.name && errors.name}
              <p class="mt-1.5 text-xs text-red-400">{errors.name}</p>
            {/if}
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-neutral-400 mb-2">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              bind:value={email}
              on:blur={() => validateField('email')}
              class="input-minimal {touched.email && errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}"
              placeholder="you@example.com"
            />
            {#if touched.email && errors.email}
              <p class="mt-1.5 text-xs text-red-400">{errors.email}</p>
            {/if}
          </div>
        </div>

        <!-- Inquiry Type -->
        <div>
          <label class="block text-sm font-medium text-neutral-400 mb-3">
            What's this about?
          </label>
          <div class="flex flex-wrap gap-3">
            {#each ['project', 'job', 'other'] as type}
              <label class="relative cursor-pointer">
                <input 
                  type="radio" 
                  bind:group={inquiryType} 
                  value={type} 
                  class="peer sr-only" 
                />
                <span class="px-4 py-2 rounded-lg border border-neutral-800 text-sm text-neutral-500 
                           peer-checked:border-white peer-checked:text-white peer-checked:bg-white/5
                           hover:border-neutral-700 transition-all duration-200 block">
                  {type === 'project' ? 'Project' : type === 'job' ? 'Job Opportunity' : 'Other'}
                </span>
              </label>
            {/each}
          </div>
        </div>

        <!-- Message -->
        <div>
          <label for="message" class="block text-sm font-medium text-neutral-400 mb-2">
            Message
          </label>
          <textarea 
            id="message" 
            rows="5" 
            bind:value={message}
            on:blur={() => validateField('message')}
            class="input-minimal resize-none {touched.message && errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}"
            placeholder="Tell me about your project or idea..."
          ></textarea>
          {#if touched.message && errors.message}
            <p class="mt-1.5 text-xs text-red-400">{errors.message}</p>
          {/if}
        </div>

        <!-- Submit Button -->
        <button 
          type="submit"
          disabled={submitting}
          class="w-full btn-primary py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {#if submitting}
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          {:else}
            Send Message
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          {/if}
        </button>
      </form>

      <!-- Alternative Contact -->
      <div class="mt-10 pt-10 border-t border-neutral-800 text-center">
        <p class="text-neutral-500 text-sm">
          Prefer email? Reach me at 
          <a href="mailto:uoladele99@gmail.com" class="text-white hover:underline">
            uoladele99@gmail.com
          </a>
        </p>
      </div>
    </div>
  </div>
</section>