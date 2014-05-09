package main

import (
  "fmt"
  "net/http"
)

func main() {
  port := 3000
  fmt.Printf("Driver Listening at %d\n", port)
  err := http.ListenAndServe(fmt.Sprintf(":%d", port), http.FileServer(http.Dir(".")))
  if err != nil {
    fmt.Println(err.Error())
  }
}
