function Modals(member, handleClose) {
  return (
    (member &&
      <dialog open>
        <article>
          <header style={{ height: "2.4rem" }}>
            <button
              aria-label="close"
              rev="prev"
              onClick={handleClose}
            ></button>
          </header>
          <hgroup>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <img style={{ width: "200px" }} src={`images/${member.slug}.svg`} />
              <h1>{member.name}</h1>
              <p>{member.bio}</p>
            </div>
          </hgroup>
        </article>
      </dialog>
    )
  )
}

export default Modals;