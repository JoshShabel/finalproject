
import styles from './Card.module.css'
import Image from "next/image";

function Card({id, name, contents}) {
{ // TODO: handle alt without creating a separate string beforehand?
        return (
            <div className={styles.cardOneStyle}>
                <h2>{name}</h2>
                <h4>{id}</h4>
                <p>{contents}</p>
            </div>
        )

    }
}

export default Card;
