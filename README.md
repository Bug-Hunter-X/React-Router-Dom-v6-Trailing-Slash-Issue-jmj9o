# React Router Dom v6 Trailing Slash Issue

This repository demonstrates a common issue encountered when using React Router Dom v6: unexpected behavior with routes containing trailing slashes.  The application includes routes for '/' and '/about'.  While '/' and '/about' work correctly, adding a trailing slash to '/about/' causes a 404 error.  The solution demonstrates how to handle this issue to ensure proper routing behavior.

## Issue

React Router v6 handles trailing slashes differently than previous versions.  This often leads to unexpected behavior if not handled correctly.

## Solution

The solution involves using the `useLocation` hook to detect the trailing slash and redirect appropriately. This ensures consistency in the routing, preventing 404 errors.