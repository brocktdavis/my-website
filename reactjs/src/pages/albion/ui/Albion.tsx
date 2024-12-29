
type PlayerPreviewProps = {
  name: string,
}

const PlayerPreview = (props: PlayerPreviewProps) => (
  <div className=''>
    <p>{props.name}</p>
  </div>
);

const PREVIEW_DATA = [
  { name: 'P1' },
];

export const AlbionPage = () => {
  return (
    <div className='container mx-auto m-4 border border-white'>
      AlbionPage
      <div className='flex flex-row'>
        <div>
          <p>Players</p>
          { PREVIEW_DATA.map(datum => (
            <PlayerPreview name={datum.name} />
          ))}
        </div>
        <div className='flex-1 border border-red-600'>
          col 2
        </div>
      </div>
    </div>
  );
};
