This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
# Project Documentation

## Detailed Component Hierarchy and Data Flow Diagram

                                         +------------------------+
                                         |     Overview Component  |
                                         +-----------+-------------+
                                                     |
                       +-----------------+-----------+------------+----------------------+
                       | Pagination Component        |  SearchBar Component              |
                       +-----------+-----------------+------------+----------------------+
                                   |                                      |
          +------------------------+-------------------+------------------+--------------+
          |                                           |                                    |
          |                +--------------------------+-----------------+                |
          |                |      TokenList Component                    |                |
          |                |                                            |                |
          |                |      +----------+----------+               |                |
          |                |      | TokenItem Component |               |                |
          |                |      +---------------------+               |                |
          |                |                                            |                |
          |                |      +------------+---------------+        |                |
          |                |      | CustomNotification Component|       |                |
          |                |      +-----------------------------+       |                |
          |                |                                            |                |
          |                |      +------------+---------------+        |                |
          |                |      | TokenDetail Component      |        |                |
          |                |      +-----------------------------+      
           |                |
          +----------------+---------------------------------------------+----------------+



## Documentation: Token Management Next.js Application with SSR, SSG, and ISR

**Overview**
This React application leverages Next.js's powerful data fetching methods to enhance performance and user experience. Specifically, it uses Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR) to fetch and display token data efficiently.

**Key Data Fetching Strategies**
+ Server-Side Rendering (SSR)
+ Static Site Generation (SSG)
+ Incremental Static Regeneration (ISR)

**Home Page**
+ File: pages/index.tsx
+ Purpose: Displays an overview of all tokens, search and pagination components.

**Implementation:**
Uses SSR to fetch the list of tokens on each request, ensuring that the data is always up-to-date.

**Technical Details:**
+ SSR: Fetches the list of tokens on the server side before rendering the page. This ensures that users always receive the most recent data when they visit the home page.
+ getServerSideProps: Runs on every request, fetching the latest token data and providing it to the page component.


**SSG, and ISR Implementations**
+ Token Detail Page
File: TokenDetail.tsx

**Functionality:**
+ Retrieves token details (name, symbol, address, chainId, priceUSD, decimals, coinKey, logoURI).
Allows users to mark/unmark tokens as favorites, persisting favorites in localStorage.

**Implementation:**
+ Uses SSG with ISR to generate static pages for each token.
+ ISR allows the page to be revalidated and updated periodically, ensuring the token data remains fresh.

**Technical Details:**
+ SSG: Pre-renders pages at build time.
+ getStaticPaths: Fetches all tokens and generates paths for each token's detail page. The fallback is set to "blocking", meaning the server will wait for the page to be generated before serving it to the user.
+ getStaticProps: Fetches detailed data for a specific token using the token's chainId and address. This ensures that the static pages can be pre-rendered with the necessary data.
+ ISR: The revalidate option is set to 60 seconds, allowing the page to be updated at most once every minute. This means that if a request is made after 60 seconds from the previous request, Next.js will regenerate the page in the background.

------------------------------------------------------------------------------------------------------------


**Additional Files and Their Usage**
+ Mixins and Styling
+ File: mixins.ts
+ Purpose: Defines reusable CSS styles and constants for consistent styling across components.
+ Content: Includes color definitions, box shadow styles, text sizes, border styles, and background styles.

## API Calls
+ File: api.ts
+ Purpose: Defines functions to fetch token data from the backend API.
+ Content:
+ fetchTokens: Fetches a list of all tokens.
+ fetchTokenDetails: Fetches detailed information for a specific token based on its chainId and address.


## Token Interface
+ File: tokenInterface.ts
+ Purpose: Defines TypeScript interfaces for the token data structures.
+ Content:
+ Token: Represents a token with properties like chainId, address, symbol, name, decimals, priceUSD, coinKey, and logoURI.
+ TokenListProps: Represents properties for a component that lists tokens.
+ TokenResponse: Represents the response structure from the API containing tokens.



------------------------------------------------------------------------------------------------------------
## Component Architecture and Design Decisions

**Summary**

+ **Component-Based Architecture:** Each component is designed to handle a specific piece of functionality, making the codebase modular and maintainable.

+ **Custom Hooks:** Encapsulate complex logic (e.g., managing favorites, pagination, searching) to promote code reuse and separation of concerns.

+ **State Management:** Uses local state (useState) and side effects (useEffect) to manage component-level state and synchronize state with URL query parameters.

+ **Styling:** Utilizes styled-components for styling, allowing for CSS-in-JS and scoped styles. Mixins are used for consistent styling across components.

+ **Routing:** Leverages next/router for client-side routing and managing URL query parameters (search and page).

**1. Overview (Overview.tsx)**
Purpose: Main page component that displays a list of tokens with search and pagination functionality.

**Hooks:**
+ useSearchTokens: Manages the search functionality.
+ usePagination: Manages pagination.
+ useFavorites: Manages favorite tokens.

**2. Pagination Component (Pagination.tsx):**
+ Purpose: Provides pagination controls.
+ Functionality:
+ Reads current page from URL query parameters and updates it accordingly.
+ Allows navigation between pages with Next and Previous buttons.
+ Uses next/router for URL manipulation.

**3. SearchBar Component (SearchInput.tsx):**
+ Purpose: Provides a search input field.
+ Functionality:
+ Initializes search term from URL query parameters.
+ Updates URL query parameters as the search term changes.
+ Handles clearing search term and URL query parameters.

**4. TokenDetail (TokenDetail.tsx)**
+ Purpose: Displays detailed information about a specific token.
+ State Management: Uses local state to manage favorite status.
+ Local Storage: Uses localStorage to persist favorite tokens across sessions.

**5. TokenItem (TokenItem.tsx)**
+ Purpose: Represents an individual token in the list.
+ Props: Receives token data, favorite status, and a toggle favorite function.
+ Styling and Animation: Uses styled-components and framer-motion for styling and animations.


**6. TokenList Component (TokenList.tsx):**
+ Purpose: Lists all tokens or filtered tokens based on search and tab selection.
+ Functionality:
+ Maps through tokens and renders TokenItem for each token.
+ Utilizes AnimatePresence from framer-motion for smooth animations.

**7. TokenDetail Component (TokenDetail.tsx):**
+ Purpose: Displays detailed information about a specific token.
+ Functionality:
+ Retrieves token details (name, symbol, address, chainId, priceUSD, decimals, coinKey, logoURI).
+ Allows users to mark/unmark tokens as favorites, persisting favorites in localStorage.

**8. Tabs Component (Tabs.tsx):**
+ Purpose: Renders tabs for All Tokens and Favorites.
+ Functionality:
+ Switches between tabs (all and favorites) and updates state in Overview component.

**8. CustomNotification Component (CustomNotification.tsx):**
+ Purpose: Shows notifications for actions like adding/removing tokens from favorites.
+ Functionality:
+ Controls visibility and duration of notifications using state and useEffect.
------------------------------------------------------------------------------------------------------------

**Challenges and Solutions**

**1. Efficient Data Fetching:**
+ Challenge: Balancing the need for up-to-date data with the performance benefits of pre-rendering.
+ Solution: Using a combination of SSR, SSG, and ISR to ensure pages are both fast and fresh.

**2. Managing Favorites:**
+ Challenge: Persisting favorite tokens across sessions.
+ Solution: Using localStorage to save favorite tokens and updating the state accordingly, i didn't see the need to use a state library like zustand or redux because the app is not so big but this can be easily be achieved.

**3. Search and Pagination:**
+ Challenge: Efficiently filtering and paginating a potentially large list of tokens.
+ Solution: Custom hooks (useSearchTokens and usePagination) to handle these functionalities efficiently.

**4. State Synchronization:** Ensuring consistent state across components (e.g., SearchBar, Pagination, Tabs) to reflect changes in UI and URL. Achieved using useEffect and updating state based on URL query parameters.

**5. Performance:** Optimizing rendering performance with large datasets using pagination and conditional rendering with AnimatePresence for smooth animations.