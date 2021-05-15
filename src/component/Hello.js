// import './Hello.css';
import styles from './Hello.module.css';
export default function Hello() {

    return (
        <div>
            <h2 style={
                {
                    color: '#f00',
                    borderRight: '5px solid #000',
                    marginBottom: '50px',
                    opacity: 1,
                }
            }>
                Hello
            </h2>
            <div className={styles.box} >Hello</div>
        </div>);
}