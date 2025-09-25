HotelBookingApp - Multi-implementation prototypes

This folder contains multiple implementations of the same hotel booking UI prototype. Each variant reads UI data from `data/hotels.json` and reuses shared assets in `Shared/`.

Folders:

- data/ : JSON data used by all prototypes
- Shared/ : shared assets (images)
- HTML_CSS_JS : vanilla modular HTML/CSS/JS prototype (already complete)
- bootstrap : HTML + CSS + JS + Bootstrap (uses data/hotels.json)
- react-cdn : React via CDN/UMD build (no bundler)
- react-ts-vite : React + TypeScript skeleton (Vite)
- dotnet-razor : .NET Razor pages skeleton (README + instructions)
- angular-ts : Angular skeleton (README + instructions)

How to run quick demos:

- For static HTML/Bootstrap/React-UMD examples:

  - Serve the `HotelBookingApp` directory with a static server and open the desired folder (Python example):

    ```powershell
    cd C:\Users\Srikanth\source\repos\SamplePrototypes\HotelBookingApp
    python -m http.server 8001
    ```

  - Then open:
    - http://localhost:8001/HTML_CSS_JS/
    - http://localhost:8001/bootstrap/
    - http://localhost:8001/react-cdn/

- For `react-ts-vite`:

  - Install dependencies and run:
    ```powershell
    cd react-ts-vite
    npm install
    npm run dev
    ```

- For .NET Razor and Angular, follow the READMEs in those folders.

If you want, I can finish fully scaffolding the .NET and Angular projects here (that requires running `dotnet new` and `ng new` which I can do if you want me to).
