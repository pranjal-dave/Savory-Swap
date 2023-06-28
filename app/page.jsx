import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="text-center head_text">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">
            Delicious Recipes
            </span>
        </h1>

        <p className="text-center desc">
        Savoury Swap is a culinary community for exchanging delectable recipes and discovering new flavour combinations.
        </p>

        <Feed/>

    </section>
  )
}

export default Home