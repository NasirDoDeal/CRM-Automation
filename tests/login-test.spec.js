import { test, expect } from '@playwright/test';



test('has title', async ({ page }) => {
  await page.goto('https://nasir3.dodealcrm.com/', {
    timeout: 60000
  });

  await expect(page).toHaveTitle(/Welcome Back/);
});

test('test', async ({ page }) => {
  await page.goto('https://nasir3.dodealcrm.com/');
  await page.getByRole('textbox', { name: 'User Name / Login ID' }).click();
  await page.getByRole('textbox', { name: 'User Name / Login ID' }).fill('nasir3');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Rimsha@123S');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Leads', { exact: true }).click();
  await page.getByRole('link', { name: 'unassigned Unassigned (142)' }).click();
});