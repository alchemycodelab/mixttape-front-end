export const getActiveMixtape = state => state.activeMixtape.mixtape;

export const getSongIndex = state => {
  return state.activeMixtape.currentSongIndex;
};

export const getPlaying = state => {
  return state.activeMixtape.playing;
};

export const getActiveLoading = state => {
  return state.activeMixtape.loading;
};

export const getFetchError = state => {
  return state.activeMixtape.error;
};
