import React from "react";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById("root-native") as HTMLElement);
root.render(<TestApp />);
