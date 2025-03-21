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

export default function Vendor() {
    const router = useRouter();
    const { id } = router.query;
  
    return (
      <div className=''>
          {id}
      </div>
    );
  }