import axios from "axios"

const getDeployments = async (req, res) => {

    try {
        const response = await axios.get(process.env.RENDER_API_URL, {
            headers: {
                'Authorization': `Bearer ${process.env.RENDER_API_KEY}`
            }
        })
        res.status(200).send(response.data);
    }
    catch (error) {
        console.error('Error fetching deployments:', error.message);
    
    res.status(500).send(error.message)}
}
export default getDeployments