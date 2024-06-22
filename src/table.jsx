import ResHeader from "./resultsHeader";
import ResBody from "./resultsBody";

function populate_table(params) {
  //x = function()
  //for loop x
  //resultsBody(x)
  return (<ResBody />);
}

function Table() {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <ResHeader></ResHeader>
        <tbody>
            {populate_table()}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
