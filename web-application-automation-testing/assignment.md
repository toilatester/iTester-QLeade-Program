# Assignment to practice learning Playwright


## Prerequisites:

- Install Playwright: [https://playwright.dev/docs/intro](https://playwright.dev/docs/intro)
- Set up browser drivers: [https://playwright.dev/docs/browsers](https://playwright.dev/docs/browsers)

## Levels:

### Level 1: Basic Interaction

1. **Login:**
   - Open login page
   - Enter username and password
   - Verify successful login

2. **Add Monitor:**
   - Navigate to "Add Monitor" page
   - Fill in monitor details (URL, name, interval)
   - Create the monitor

3. **View Monitor Details:**
   - Open monitor's detail page
   - Verify information
   - Navigate back to list

4. **Pause Monitor:**
   - Select the monitor
   - Pause it
   - Confirm updated status

5. **Search Monitors:**
   - Perform a search using a keyword
   - Verify filtered results

### Level 2: Intermediate Automation

6. **Edit Monitor:**
   - Open monitor's detail page
   - Update interval
   - Save changes

7. **Delete Monitor:**
   - Select the monitor
   - Confirm deletion
   - Verify absence from list

8. **Notification Test:**
   - Send test notification (email, Discord, Telegram)

9. **Chart Interaction:**
   - Interact with uptime chart (zoom, verify data points)

10. **Export Data:**
   - Export monitor data (CSV, JSON)
   - Confirm download or content

### Level 3: Advanced Strategies

11. **Data-Driven Testing:**
   - Parameterize monitor creation with data file

12. **Error Handling:**
   - Handle common errors (login, missing elements, API)

13. **Page Object Model:**
   - Design POM for Uptime Kuma pages/functions

14. **Headless Execution:**
   - Run tests in headless mode
   - Compare with normal execution

15. **Reporting and Screenshots:**
   - Implement basic reporting with screenshots

### Bonus Challenges:

1. **Bulk Monitor Addition and Reporting:**
   - Automate monitor creation for multiple websites
   - Send test notifications
   - Generate uptime report

2. **Dashboard Data Visualization:**
   - Scrape monitor statuses
   - Create visual representation (e.g., bar chart)
