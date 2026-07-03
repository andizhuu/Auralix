import Foundation

@objc public class AuralixMusic: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
