import './Loading.css'

const Loading = () => {
  return (
    <div className='wrapper'>
      <section className='loading'>
        <img
          src='/images/loading.png'
          alt='Loading Circle'
        />
        <h2>Welcome to our Site</h2>
      </section>
    </div>
  )
}

export default Loading
