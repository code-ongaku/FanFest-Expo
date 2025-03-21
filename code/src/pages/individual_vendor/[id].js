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
    const vendors = {
      1: { id: 1, title: 'Vendor 1', body: 'This is the content of Vendor 1.' }
    };
  
    const vendor = vendors[params.id];
  
    return {
      props: {
        vendor
      },
    };
  }

export default function Post({ vendor }) {
  return (
    <div>
      <h1>{vendor.title}</h1>
      <p>{vendor.body}</p>
    </div>
  );
}