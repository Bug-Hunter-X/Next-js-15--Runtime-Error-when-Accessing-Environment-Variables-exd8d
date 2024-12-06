# Next.js 15 Environment Variable Handling Bug

This repository demonstrates a common error encountered when working with environment variables in Next.js 15 applications.  The issue arises when attempting to access environment variables directly within page components. If the variable is not defined, it results in a runtime error.  The solution involves using the `next/config` module to access the variables safely.

## Bug Description
The `about.js` file attempts to access the `API_KEY` environment variable. If this variable is not set, the application will throw an error.

## Solution
The `aboutSolution.js` file demonstrates the correct way to handle environment variables. It uses the `next/config` module to access the `API_KEY` variable safely.