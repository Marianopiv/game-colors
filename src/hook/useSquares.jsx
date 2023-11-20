import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addColor,
  addTemporalColor,
  getColors,
  insertColors,
  removeColor,
  removeTemporalColor,
  restColor,
  selectorUnselectAll,
  setColorName,
  setColorText,
  setToogleModal,
  toogleGame,
} from "../slices/colorsSlice";
import { getDb, getRandom, isChecked } from "../helper";
import king from "../assets/king.jfif";
import Swal from "sweetalert2";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const useSquares = () => {
  const {
    selectedColors,
    selectedTemporalColors,
    startGame,
    colorName,
    colorText,
    fullData,
    temporalColors,
    toogleModal,
  } = useSelector((store) => store.colors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedColors.length === 0 && colorName && startGame) {
      dispatch(toogleGame(false));
      Swal.fire({
        text: "Felicidades, sabes mucho de colores!",
        imageUrl: king,
        imageHeight: 500,
        imageAlt: "A tall image",
      });
    } else {
      dispatch(setColorName(selectedColors[getRandom(selectedColors)]));
      dispatch(setColorText(selectedColors[getRandom(selectedColors)]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColors]);

  const handleOnChange = (color) => {
    const flag = isChecked(selectedColors, color);
    if (flag) {
      dispatch(removeColor(color));
    } else {
      dispatch(addColor(color));
    }
  };

  const handleRestColor = (color) => {
    dispatch(restColor(color));
  };

  const handleSelectAll = (arr) => {
    dispatch(selectorUnselectAll(arr));
  };

  const handleToogleGame = () => {
    dispatch(toogleGame(!startGame));
  };

  const getDataBase = () => {
    dispatch(getDb());
  };

  const handleModal = () => {
    dispatch(setToogleModal());
  };

  const handleOnChangeTemp = (color) => {
    const flag = isChecked(selectedTemporalColors, color);
    if (flag) {
      dispatch(removeTemporalColor(color));
    } else {
      dispatch(addTemporalColor(color));
    }
  };


  const handleInsert = () => {
    dispatch(insertColors());
  };

  useEffect(() => {
    const collectionRef = collection(db, "colors");

    // Subscribe to collection updates using onSnapshot
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        color: doc.data().color,
        ...doc.data(),
      }));
      dispatch(getColors(updatedData));
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    dispatch,
    getDataBase,
    handleInsert,
    handleOnChange,
    handleOnChangeTemp,
    handleModal,
    handleRestColor,
    handleSelectAll,
    handleToogleGame,
    isChecked,
    colorName,
    colorText,
    fullData,
    selectedColors,
    selectedTemporalColors,
    startGame,
    temporalColors,
    toogleModal,
  };
};

export default useSquares;
