# Analytics & Conversion Tracking Setup

Event tracking for appointment-driving features is implemented in `lib/analytics.ts` and wired across components. This doc covers GA4, GTM, Looker Studio, and UTM.

## Events Implemented

| Event | Params | Where |
|-------|--------|--------|
| `property_lightbox_open` | page_location | Property lightbox modal open |
| `property_lightbox_book_tour` | properties_viewed | Lightbox "Book Your Tour" click |
| `property_lightbox_text_alert` | lead_type (sms_subscribe / sms_tour) | Lightbox SMS links |
| `calendly_fab_view` | scroll_depth | FAB first visible |
| `calendly_fab_click` | page_path | FAB click |
| `calendly_appointment_scheduled` | source | Calendly postMessage (fab_button / header / footer / faq) |
| `appointment_booked` | source | Same as above — **mark as conversion in GA4** |
| `urgency_banner_view` | message_variant | Banner visible (rotating message) |
| `urgency_banner_click` | action: see_available | Banner CTA click |
| `urgency_banner_dismiss` | time_on_page | Banner dismiss |
| `featured_listing_view` | listings_shown | Featured grid in view |
| `featured_listing_click` | property_price, listing_type | Card click (estate / villa / listing) |
| `realscout_signup_from_preview` | conversion_source: featured_grid | "Search All Spanish Trail Homes" click |
| `cta_click` | cta_text, cta_location | Calendly CTA (hero / faq / footer / header) |
| `phone_click` | phone_number, source | Tel link (header / footer / banner) |
| `sms_click` | phone_number, intent (tour / alert / question) | SMS link |
| `testimonial_view` | testimonial_name | Carousel slide view |
| `testimonial_navigate` | direction (next / previous / dot) | Carousel navigation |
| `reviews_link_click` | destination (google / zillow / internal / reviews_page) | Testimonial source + "Read 50+ Reviews" |

## GA4 Conversion Goal

1. In GA4: **Admin → Events**.
2. Find **`appointment_booked`** (or create it by triggering a booking once).
3. Toggle **Mark as conversion**.
4. Use this conversion for “Overall appointment rate” and goal funnels.

## GTM Triggers (Optional)

If you use Google Tag Manager instead of/in addition to gtag in layout:

- **Calendly appointment confirmed**  
  - Custom Event or Message Listener: listen for `calendly.event_scheduled` (or push `appointment_booked` from our listener into `dataLayer` and trigger on that).
- **RealScout registration**  
  - Listen for RealScout’s postMessage or custom event when registration completes; fire a tag with event name e.g. `realscout_signup`.
- **Contact form submissions**  
  - On `/contact`: form submit or thank-you page view → fire event `form_submit` with `form_name: 'contact'`.

Our app already pushes GA4 events via `gtag('event', ...)` in `lib/analytics.ts`. If you move to GTM, add a dataLayer push in the same places and configure GTM tags to send to GA4.

## Looker Studio Dashboard (Week-over-Week)

Suggested metrics:

- **Lightbox open rate**: `property_lightbox_open` / page views (by page or overall).
- **Calendly FAB conversion**: `calendly_fab_click` / `calendly_fab_view`.
- **Featured listings CTR**: `featured_listing_click` / `featured_listing_view`.
- **Overall appointment rate**: `appointment_booked` (or GA4 conversion) / site users (or sessions).

Create a report with:

- Date range comparison (e.g. This week vs Last week).
- Breakdowns by `source`, `cta_location`, `page_path` where useful.

## UTM Parameters on External Links

Add UTM params to all **external** sharing/partner links so traffic is attributed in GA4:

- `utm_source` (e.g. `spanishtrailhomes`, `facebook`, `newsletter`)
- `utm_medium` (e.g. `social`, `email`, `cpc`)
- `utm_campaign` (e.g. `spring_2025_listings`, `tour_reminder`)

Example:

```text
https://www.spanishtrailhomes.com/?utm_source=newsletter&utm_medium=email&utm_campaign=tour_reminder
```

Use the same pattern for Calendly links in emails/SMS if you want to attribute bookings by campaign (e.g. `utm_campaign=faq_cta`).

## Weekly Dashboard Checklist

- Lightbox open rate (views / page visits).
- Calendly FAB conversion (clicks / FAB views).
- Featured listings CTR (clicks / impressions).
- Overall appointment rate (Calendly bookings / site visitors).
- Week-over-week comparison in Looker Studio.
