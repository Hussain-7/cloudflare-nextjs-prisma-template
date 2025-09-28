import { test, expect } from '@playwright/test'

test.describe('Brainlift Studio E2E', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/')
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle')
    
    // Check if the page title is correct
    await expect(page).toHaveTitle(/Brainlift Studio/i)
  })

  test('API endpoint returns data', async ({ request }) => {
    const response = await request.get('/api/brainlifts')
    
    expect(response.ok()).toBeTruthy()
    
    const data = await response.json()
    expect(data).toHaveProperty('brainlifts')
    expect(data).toHaveProperty('timeTaken')
    expect(data).toHaveProperty('size')
    expect(Array.isArray(data.brainlifts)).toBeTruthy()
  })

  test('navigation works', async ({ page }) => {
    await page.goto('/')
    
    // Add navigation tests as you build your UI
    // Example:
    // await page.click('text=About')
    // await expect(page).toHaveURL('/about')
  })
})