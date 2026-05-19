---
title: Contact
layout: default
---

<section class="contact-section">
  <div class="container">
    <h1>Contact us</h1>
    <div class="contact-grid">
      <div>
        <form class="contact-form" action="https://formspree.io/f/meedqlvz" method="POST">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <select id="subject" name="subject">
              <option value="">Select a topic...</option>
              <option value="membership">Membership enquiry</option>
              <option value="chapter">Starting a chapter</option>
              <option value="media">Media enquiry</option>
              <option value="policy">Policy question</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
      <div class="contact-info">
        <div class="contact-card">
          <h3>Social</h3>
          <p>
            <a href="https://www.facebook.com/people/Labor-YIMBY/61589764125927/" target="_blank" rel="noopener">Facebook</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
