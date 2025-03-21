import { useRouter } from 'next/router';

export async function getStaticPaths() {
    const paths = [
      { params: { id: '1' } }
    ];
  
    return {
      paths,
      fallback: false
    };
}

export async function getStaticProps({ params }) {
    // Hardcoded data
    const events = {
      1: { id: 1, title: 'Event 1', body: 'This is the content of event 1.' }
    };
  
    const event = events[params.id];
  
    return {
      props: {
        event
      },
    };
  }

export default function Post({ event }) {
  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.body}</p>
    </div>
  );
}