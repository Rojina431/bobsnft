import './footer.css'

const SocialLink = (props) => {
    return (
        <span className="social-link">
            <img src={props.img} alt="sociallink"/>
        </span>
    )
}

export default SocialLink