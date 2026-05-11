import styles from './Extra.module.css';

function Extra() {
  return (
    <section className={styles.equipe}>
      <h1>Nossa Equipe</h1>
      <div className={styles.membros}>
        <div className={styles.membro}>
          <div className={styles.fotoPlaceholder}>👩‍💻</div>
          <h4>Maria Clara</h4>
          <p>Diretora Geral</p>
        </div>
        <div className={styles.membro}>
          <div className={styles.fotoPlaceholder}>👩‍💻</div>
          <h4>Maria Eduarda</h4>
          <p>Diretora Criativa</p>
        </div>
      </div>
    </section>
  );
}
export default Extra;