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
    const panels = {
      1: { id: 1, title: 'Panel 1', body: 'This is the content of Panel 1.' }
    };
  
    const panel = panels[params.id];
  
    return {
      props: {
        panel
      },
    };
  }

export default function Post({ panel }) {
  return (
    <div>
      <h1>{panel.title}</h1>
      <p>{panel.body}</p>
    </div>
  );
}