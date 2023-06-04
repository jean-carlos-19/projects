import { useState } from "react";

const useLoading = () => {
  const [loading, set_loading] = useState(false);

  return { loading, set_loading };
};

export { useLoading };
