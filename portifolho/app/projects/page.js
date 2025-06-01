export default function Projects() {
  return (
    <div className="container">
      <div className="card">
        <h1>Projects</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <div className="card" style={{ width: '200px' }}>
            <p>🎲 Jogo do Dado</p>
            <button>Play</button>
          </div>
          <div className="card" style={{ width: '200px' }}>
            <p>🔐 Jogo da Senha</p>
            <button>Play</button>
          </div>
          <div className="card" style={{ width: '200px' }}>
            <p>🔢 Conversor de Medidas</p>
            <button>Play</button>
          </div>
          <div className="card" style={{ width: '200px' }}>
            <p>✨ Novos Projetos</p>
            <button>Play</button>
          </div>
        </div>
      </div>
    </div>
  )
}