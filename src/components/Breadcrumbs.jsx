export default function Breadcrumb({ navEntryList }) {
  return (
    navEntryList?.map(function (entry) {
      return (
        <div className='flex items-center justify-center gap-2 text-white' key={Math.random()}>
          <p>/</p>
          <a href={entry.href}>
            {entry.name}
          </a>
        </div>
      );
    })
  );
};