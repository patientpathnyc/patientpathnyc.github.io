# Patient Path NYC Website

A simple, mobile-responsive website for Patient Path NYC - a professional patient advocacy service in New York City.

## Features

- **Simple HTML/CSS Structure**: Clean, maintainable code optimized for simplicity
- **Mobile Responsive**: Fully optimized for mobile, tablet, and desktop devices
- **Contact Form**: Email submission form that sends messages to shlomit@patientpathnyc.com
- **SEO Optimized**: Includes meta tags, structured data, sitemap, and robots.txt
- **AI Agent Friendly**: Structured data using Schema.org for Claude, ChatGPT, and other AI agents
- **Accessible**: Semantic HTML with proper ARIA labels

## File Structure

```
patientpathnyc/
├── index.html              # Main HTML file
├── styles.css              # All styling including mobile responsiveness
├── script.js               # JavaScript for mobile menu and form handling
├── contact-handler.php     # PHP script for contact form email functionality
├── robots.txt              # Search engine crawling instructions
├── sitemap.xml             # XML sitemap for search engines
├── schema.json             # Structured data (also embedded in HTML)
├── humans.txt              # Human-readable site information
├── .htaccess               # Apache server configuration
├── images/                 # All images and logos
│   ├── logo.png
│   ├── hero.jpg
│   ├── service1.jpg
│   ├── service2.jpg
│   ├── service3.jpg
│   └── shlomit.jpg
└── README.md               # This file
```

## Setup Instructions

### Prerequisites

- Web server with PHP support (Apache, Nginx, or any hosting provider)
- PHP 7.0 or higher
- Mail server configuration (most hosting providers have this pre-configured)

### Local Development

1. **Using PHP Built-in Server** (easiest for local testing):
   ```bash
   php -S localhost:8000
   ```
   Then open http://localhost:8000 in your browser.

2. **Using XAMPP/MAMP** (for Windows/Mac):
   - Install XAMPP or MAMP
   - Copy the entire folder to the `htdocs` directory
   - Access via http://localhost/patientpathnyc

### Deployment

#### Option 1: Traditional Web Hosting (Recommended)

1. Upload all files to your web hosting provider via FTP/SFTP
2. Ensure PHP and mail functions are enabled
3. Update the domain in the following files:
   - `index.html`: Update meta tags (og:url)
   - `robots.txt`: Update sitemap URL
   - `sitemap.xml`: Update all URLs
   - `contact-handler.php`: Verify email configuration

#### Option 2: Netlify (No PHP - needs modification)

If using Netlify, you'll need to replace the PHP contact form with:
- Netlify Forms (add `netlify` attribute to form)
- Or use a third-party service like Formspree or EmailJS

To use Netlify Forms:
1. In `index.html`, modify the form tag:
   ```html
   <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
   ```
2. Add hidden input:
   ```html
   <input type="hidden" name="form-name" value="contact" />
   ```
3. Configure email notifications in Netlify dashboard

### Email Configuration

The contact form uses PHP's `mail()` function. For production:

1. **Shared Hosting**: Usually works out of the box
2. **VPS/Dedicated Server**: Configure sendmail or postfix
3. **Alternative Solutions**:
   - Use SendGrid, Mailgun, or similar service
   - Modify `contact-handler.php` to use SMTP with PHPMailer

Example using PHPMailer (install via Composer):
```php
// Install: composer require phpmailer/phpmailer
use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'your-email@gmail.com';
$mail->Password = 'your-password';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
```

## Testing Contact Form

To test the contact form:

1. Ensure PHP is running
2. Fill out the form on the website
3. Check the email inbox for shlomit@patientpathnyc.com
4. If emails aren't arriving:
   - Check server PHP error logs
   - Verify mail server configuration
   - Check spam/junk folder
   - Test with a simple PHP mail test script

## SEO and Crawlability Features

### For Search Engines (Google, Bing, etc.)

- **robots.txt**: Tells search engines what to crawl
- **sitemap.xml**: Lists all pages for efficient crawling
- **Meta tags**: Title, description, keywords
- **Open Graph tags**: For social media sharing
- **Structured data**: Schema.org JSON-LD format

### For AI Agents (Claude, ChatGPT, etc.)

- **Structured Data**: Schema.org MedicalBusiness type with detailed service information
- **Semantic HTML**: Proper use of section, header, nav, article tags
- **Clear content hierarchy**: H1, H2, H3 tags in logical order
- **Descriptive attributes**: Alt text for images, aria-labels for buttons

The structured data includes:
- Business information (name, contact, address)
- Services offered (detailed descriptions)
- Founder information (credentials and experience)
- Service area (NYC)

This allows AI agents to easily:
- Understand what services are offered
- Extract contact information
- Identify qualifications and expertise
- Provide accurate information to users asking about Patient Path NYC

## Mobile Optimization

The website is fully responsive with breakpoints at:
- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

Features:
- Mobile-friendly navigation (hamburger menu)
- Touch-optimized buttons and links
- Readable font sizes on small screens
- Optimized images for faster loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Changing Colors

Edit `styles.css` and look for these color values:
- Primary gradient: `#667eea` and `#764ba2`
- Text: `#333`
- Background: `#f9f9f9`

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add styling in `styles.css`
3. Update navigation menu if needed
4. Update `sitemap.xml` if it's a major section

### Modifying Content

All content is in `index.html` and uses semantic HTML for easy editing.

## Performance Optimization

Current optimizations:
- Minified CSS and JavaScript recommended for production
- Image optimization (already done via Squarespace CDN)
- Browser caching via .htaccess
- GZIP compression enabled

For further optimization:
- Use a CDN for images
- Implement lazy loading for images
- Minify CSS and JavaScript files
- Enable HTTP/2 on server

## Security Considerations

Implemented security features:
- Form input sanitization
- Email validation
- CSRF protection recommended (add token to form)
- XSS prevention via headers
- HTTPS enforcement via .htaccess

## Support and Maintenance

For questions or issues:
- Email: shlomit@patientpathnyc.com
- Phone: (917) 283-2765

## License

Copyright © 2025 Patient Path NYC. All rights reserved.

## Credits

- Website structure based on Patient Path NYC original design
- Images from original website (https://www.patientpathnyc.com)
- Built with semantic HTML5, CSS3, and vanilla JavaScript
