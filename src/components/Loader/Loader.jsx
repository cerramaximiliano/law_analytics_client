export default function Loader ({loading})  {
    return (
        <div 
        className={`loader ${
            loading ? 
            'custonVisible' 
            : 'customInvisible'
          } absolute inset-0 flex items-center justify-center rounded-large `}
        >
            <div className="loaderBar"></div>
      </div>
    );
  };