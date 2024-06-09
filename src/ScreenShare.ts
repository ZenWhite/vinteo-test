/*
  Проверку на наличие аудио-треков можно вынести в отдельный метод с целью переиспользования.
  Имеет смысл реструктурировать метод startPresentationWithoutSound, чтобы отключение звука шло до начала презентации.
*/

class ScreenShare {
  startPresentationWithoutSound(mediaStream: MediaStream) {
    this.stopPresentation()

    if (this.hasAudioTracks(mediaStream)) {
      this.muteAudio()
    }

    this.startPresentation(mediaStream)
  }
  stopPresentation() {}
  startPresentation(mediaStream: MediaStream) {}
  muteAudio() {}
  hasAudioTracks(mediaStream: MediaStream): boolean {
    return mediaStream.getAudioTracks().length > 0
  }
}
