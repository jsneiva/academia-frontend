import Header from '../../../components/admin/Header'
import axios from 'axios'
import serverUrl from '../../../utils/env'
import styles from '../../../components/admin/Gallery.module.css'
import Button from  '../../../components/admin/Button'

export default function Gallery(props){
    return(
        <>
            <Header  textHeader="Galeria" >
                <Button text="Adicionar"/>
                <div className={styles.galleryContent}>
                    <ul className={styles.headerGallery}>
                        <li>Imagem</li>
                        <li>Titulo da Imagem</li>
                        <li>Descrição da Imagem</li>
                        <li>Ações</li>
                    </ul>
                    <div className={styles.imgContent}>
                        <img src="../assets/Images/blog1.jpg" alt=""/>
                        <h4>Titulo da imagem</h4>
                        <p>Descrição da imagem</p>
                        <Button text="Editar"/>
                        <Button text="Excluir"/>
                    </div>
                </div>    
            </Header>
            
        </>
    )
}

Gallery.getInitialProps = async (ctx) =>{
    let res = []
    try{
        res = await axios.get(`${serverUrl}/gallery`)

    }catch(err){
        res = err
    }
    console.log(res.data)
    return {
        props: res.data
    }
}