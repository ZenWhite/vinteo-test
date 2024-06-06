class SomeClass {

  private neverUsedMethod() {
      console.log("This function is called");
  }

  public someMethod() {
      if (false) {
          doSomethingThatNeverHappens();
      }

      try {
          doSomethingSafe();
      } catch (Exception e) {
          e.printStackTrace();
      }
  }

  private doSomethingSafe() {
     console.log('Safe operation')
  }
}
