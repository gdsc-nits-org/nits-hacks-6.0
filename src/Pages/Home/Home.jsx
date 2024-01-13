import { Navbar, Footer, NitsHacks, Techno, Sponsor } from '../../components/index'
const Home = () => {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <Navbar />
            <NitsHacks />
            <Techno />
            <Footer />
            <Sponsor />
        </div>
    );
}
export default Home;

