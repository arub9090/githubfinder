function Home() {
    return (
        <div className="text-6xl">
            <p>Welcome to Github Finder</p>
            {process.env.REACT_APP_GITHUB_KEY}

        </div>
    )
}

export default Home
