import { test, expect } from '@playwright/test';

test('Multiply 7x9 correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: '7' }).click();
  await page.getByRole('button', { name: 'x' }).click();
  await page.getByRole('button', { name: '9' }).click();
  await page.getByRole('button', { name: '=' }).click();
  await expect(page.locator('#root')).toContainText('63');
});
