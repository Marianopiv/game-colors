import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { getDb } from "../helper";

const initialState = {
  colorName: "",
  colortext: "",
  fullData: {
    loading: false,
    info: "",
  },
  selectedColors: [],
  startGame: false,
  temporalColors: ["gray", "purple", "lime", "white", "indigo"].map((color) => ({ id: Math.random(), color })),
  selectedTemporalColors: [],
  toogleModal: false,
};
const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    addColor: (state, action) => {
      state.selectedColors = [...state.selectedColors, action.payload];
    },
    addTemporalColor: (state, action) => {
      state.selectedTemporalColors = [...state.selectedTemporalColors, action.payload];
    },

    getColors: (state, action) => {
      state.fullData.info = action.payload;
    },
    insertColors: (state, action) => {
      state.fullData.info = state.temporalColors;
    },
    removeColor: (state, action) => {
      state.selectedColors = state.selectedColors.filter((color) => action.payload !== color);
    },
    removeTemporalColor: (state, action) => {
      state.selectedTemporalColors = state.selectedTemporalColors.filter((color) => action.payload.id !== color.id);
    },
    toogleGame: (state, action) => {
      state.startGame = action.payload;
    },
    setColorName: (state, action) => {
      state.colorName = action.payload;
    },
    setColorText: (state, action) => {
      state.colorText = action.payload;
    },
    setToogleModal: (state, action) => {
      state.toogleModal = !state.toogleModal;
    },
    restColor: (state, action) => {
      if (action.payload.color === state.colorName.color) {
        state.selectedColors = state.selectedColors.filter((color) => color.color !== state.colorName.color);
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-start",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "error",
          title: "Color equivocado, intente nuevamente",
        });
        state.selectedColors = state.selectedColors.sort(() => Math.random() - 0.5);
      }
    },
    selectorUnselectAll: (state, action) => {
      if (state.selectedColors.length < action.payload.length) {
        state.selectedColors = action.payload;
      } else {
        state.selectedColors = [];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDb.pending, (state) => {
      state.fullData.loading = true;
    });
    builder.addCase(getDb.fulfilled, (state, action) => {
      state.fullData.loading = false;
      state.fullData.info = action.payload?.data;
    });
    builder.addCase(getDb.rejected, (state, action) => {
      state.loading = false;
      state.fullData.info = "";
    });
  },
});

export const {
  addColor,
  addTemporalColor,
  getColors,
  insertColors,
  setColorText,
  removeColor,
  removeTemporalColor,
  restColor,
  selectorUnselectAll,
  selectedTemporalColors,
  setColorName,
  setToogleModal,
  temporalColors,
  toogleGame,
  toogleModal,
} = colorsSlice.actions;

export default colorsSlice.reducer;
