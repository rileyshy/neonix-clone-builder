
# CM Store Admin Panel

This is a standalone HTML/CSS/JavaScript admin panel for the CM Store website.

## Features
- Dashboard with statistics
- User management (add, edit, delete users)
- Product management (add, edit, delete products)
  - Set product details, including name and category
  - Specify pricing in Pounds (£)
  - Manage product stock levels
  - Set product status (active/inactive)
- Settings page
- Fully responsive design that works on mobile and desktop
- Neon theme matching the main site

## How to Use
1. Access the admin panel through the main website's admin page (/admin)
2. Navigate between sections using the sidebar
3. Use the "Back to Site" button to return to the main website

## Product Management
- Add new products with the "Add Product" button
- Set product details including name, category, price (£), stock quantity, and status
- Edit existing products by clicking the "Edit" button
- Remove products with the "Delete" button
- Products with zero stock are automatically labeled as "Out of stock"

## Integration
The admin panel is integrated with the main React website:
- You can access it through the "/admin" route on the main site
- The "Back to Site" button will return you to the main page
- The styling and theme match the main website's neon aesthetic

## Technical Details
- Built with vanilla HTML, CSS, and JavaScript (no frameworks or libraries)
- Uses Lucide for icons (loaded via CDN)
- Includes responsive design for mobile devices
- Can be accessed directly at /admin-panel/index.html or through the React app's admin page
- Product data is stored in browser localStorage for persistence
