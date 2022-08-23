import './footer.css'

const SocialLink = (props) => {
    return (
        <span className="social-link">
            <img src={props.img} />
        </span>
    )
}

export default SocialLink