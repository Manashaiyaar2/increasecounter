;; Counter Contract
;; A simple counter that can be incremented and decremented

;; Define a data variable to store the counter value
(define-data-var counter uint u0)

;; Public function to increment the counter
(define-public (increment)
  (begin
    (var-set counter (+ (var-get counter) u1))
    (ok (var-get counter))))

;; Public function to decrement the counter
(define-public (decrement)
  (begin
    (asserts! (> (var-get counter) u0) (err u1)) ;; Prevent underflow
    (var-set counter (- (var-get counter) u1))
    (ok (var-get counter))))

;; Read-only function to get the current counter value
(define-read-only (get-counter)
  (ok (var-get counter)))