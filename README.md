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



## Documentation: Token Management React Application with SSR, SSG, and ISR

**Overview**
This React application leverages Next.js's powerful data fetching methods to enhance performance and user experience. Specifically, it uses Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR) to fetch and display token data efficiently.

**Key Data Fetching Strategies**
+ Server-Side Rendering (SSR)
+ Static Site Generation (SSG)
+ Incremental Static Regeneration (ISR)

**Home Page**
File: pages/index.tsx
Purpose: Displays an overview of all tokens.

## Implementation:

Uses SSR to fetch the list of tokens on each request, ensuring that the data is always up-to-date.

**Technical Details:**
+ SSR: Fetches the list of tokens on the server side before rendering the page. This ensures that users always receive the most recent data when they visit the home page.
+ getServerSideProps: Runs on every request, fetching the latest token data and providing it to the page component.


**SSG, and ISR Implementations**
Token Detail Page
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
Mixins and Styling
File: mixins.ts
Purpose: Defines reusable CSS styles and constants for consistent styling across components.
Content: Includes color definitions, box shadow styles, text sizes, border styles, and background styles.

## API Calls
File: api.ts
Purpose: Defines functions to fetch token data from the backend API.
Content:
fetchTokens: Fetches a list of all tokens.
fetchTokenDetails: Fetches detailed information for a specific token based on its chainId and address.


## Token Interface
File: tokenInterface.ts
Purpose: Defines TypeScript interfaces for the token data structures.
Content:
Token: Represents a token with properties like chainId, address, symbol, name, decimals, priceUSD, coinKey, and logoURI.
TokenListProps: Represents properties for a component that lists tokens.
TokenResponse: Represents the response structure from the API containing tokens.



------------------------------------------------------------------------------------------------------------
## Component Architecture and Design Decisions

Main Components

**1.Overview**
Purpose: Main page component that displays a list of tokens with search and pagination functionality.

**Hooks:**
+ useSearchTokens: Manages the search functionality.
+ usePagination: Manages pagination.
+ useFavorites: Manages favorite tokens.


**Sub-components:**
+ SearchBar: Component for the search input.
+ TokenList: Component to display a list of tokens.
+ Pagination: Component to handle page navigation.
+ CustomNotification: Component to display notifications.
+ Tabs: Component to switch between "all tokens" and "favorites".

**2. TokenDetail**
+ Purpose: Displays detailed information about a specific token.
+ State Management: Uses local state to manage favorite status.
+ Local Storage: Uses localStorage to persist favorite tokens across sessions.

**3. TokenItem**
+ Purpose: Represents an individual token in the list.
+ Props: Receives token data, favorite status, and a toggle favorite function.
+ Styling and Animation: Uses styled-components and framer-motion for styling and animations.

------------------------------------------------------------------------------------------------------------

**Challenges and Solutions**

**1. Efficient Data Fetching:**
+ Challenge: Balancing the need for up-to-date data with the performance benefits of pre-rendering.
+ Solution: Using a combination of SSR, SSG, and ISR to ensure pages are both fast and fresh.

**2. Managing Favorites:**
+ Challenge: Persisting favorite tokens across sessions.
+ Solution: Using localStorage to save favorite tokens and updating the state accordingly.

**3.Search and Pagination:**
+ Challenge: Efficiently filtering and paginating a potentially large list of tokens.
+ Solution: Custom hooks (useSearchTokens and usePagination) to handle these functionalities efficiently.
