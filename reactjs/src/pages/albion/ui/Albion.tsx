import { AlbionBuild } from './build';
import { AlbionBuildToolbar } from './toolbar';


export const AlbionPage = () => {
  return (
    <>
    <AlbionBuildToolbar />
    <div className='container m-4 mx-auto'>
      <AlbionBuild />
    </div>
    </>
  );
};
