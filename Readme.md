# Morthics-compiler

Instrument wich can compile jsx styled **[morthics](https://www.npmjs.com/package/morthics)** code into classic **[morthics](https://www.npmjs.com/package/morthics)** code

## How to use

```
npm start YourProjectDirectory
```

## Example

### SRC (Before compilate)

```jsx
    export class Hi extends Component {
        beforeRender(): void {
            this.state.count = 0
            this.ref.Button = new CounterButton()
        }
        render() {
            const { Button } = this.ref

            return <container x={10}>
                <text style={{fill: '#fff'}}>this.state.count</text>
                <Button count={this.state.count} increment={()=>this.state.count++}/>
            </container>
        }
    }
```

### DIR (After compilate)

```typescript
export class Hi extends Component {
    beforeRender(): void {
        this.state.count = 0;
        this.ref.Button = new CounterButton();
    }
    render() {
        const { Button } = this.ref;

        return Container(
            { x: 10 },
            Text(
                {
                    style: {
                        fill: '#fff',
                    },
                },
                this.state.count,
            ),
            withProps(Button, {
                count: this.state.count,
                increment: () => this.state.count++,
            }),
        );
    }
}
```
